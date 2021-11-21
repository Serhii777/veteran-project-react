import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import ProductsList from '../ProductsList/ProductsList';
import WeightInput from '../WeightInput/WeightInput';
import ProductsInput from '../ProductsInput/ProductsInput.js';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
import Button from '../../Button/Button';
import Picker from '../../Picker/Picker';
import NewModal from '../../Modal/NewModal';
import NotRecommendedInModal from '../NotRecommendedInModal/NotRecommendedInModal';
import sendNotification from './notification';
import rationsItemOperationsVit from '../../../redux/rations/rationItemsOperations';
import { rationItemsSelectors } from '../../../redux/rations';
import styles from './FormDate.module.css';

class ProductInputForm extends Component {
  state = {
    date: '',
    weight: '',
    productTitle: '',
    productSearchValue: '',
    visibleListProducts: false,
    visibleNotification: false,
    notificationMessage: '',
    products: [],
    productInFocusId: 0,
    buttonAddDisabled: false,
    productInputDisabled: false,
    WeightInputDisabled: false,
    buttonText: 'Добавить',
    buttonAddAllow: true,
    isModal: false,
    isNotRecommended: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleBodyClick);
    const { userDate } = this.props;

    if (userDate && !this.state.date) {
      const newDate = userDate.split('-').reverse().join('-');
      this.setState({ date: newDate });
    }
  }

  componentDidUpdate() {
    const { userDate } = this.props;

    if (userDate && !this.state.date) {
      const newDate = userDate.split('-').reverse().join('-');
      this.setState({ date: newDate });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBodyClick);
  }

  handleBodyClick = e => {
    if (e.target.parentElement && e.target.parentElement.id !== 'productList') {
      this.setState({ visibleListProducts: false });
    }
  };

  handleItemHover = e => {
    const keys = [];
    for (const [key, value] of Object.entries(e.target)) {
      keys.push(key);
    }
    this.setState({ productInFocusId: e.target[keys[1]].value });
  };

  handleChangeWeight = e => {
    this.setState({ weight: e.target.value }, () => {
      this.state.productSearchValue === '' || this.state.weight === ''
        ? this.setState({ buttonAddAllow: true })
        : this.setState({ buttonAddAllow: false });
    });
  };

  handleChangeProducts = async e => {
    this.setState(
      {
        productSearchValue: e.target.value,
        visibleListProducts: true,
      },
      () => {
        this.state.productSearchValue === '' || this.state.weight === ''
          ? this.setState({ buttonAddAllow: true })
          : this.setState({ buttonAddAllow: false });
      },
    );

    try {
      const products = await rationsItemOperations.getProducts(e.target.value);
      this.setState({ products });
    } catch (error) {
      this.setState({ visibleListProducts: false });
    }
  };

  handlerChangeDate = async e => {
    const date = e.target.value.split('-');
    const transformedDate = [date[2], date[1], date[0]].join('-');

    this.setState({
      date: e.target.value,
      transformedDate,
    });

    await this.props.onGetInfo(transformedDate);
  };

  handleProductInputClick = isNotRecommended => {
    this.setState({
      productSearchValue: this.state.productInFocusId,
      visibleListProducts: false,
      isNotRecommended,
    });
  };

  handlerNotRecommended = answer => {
    if (answer) {
      this.setProductInRacion();
      this.handleModal();
      this.setState({ isNotRecommended: false });
      return;
    }

    this.setState({
      productSearchValue: '',
      weight: '',
      buttonAddAllow: true,
      isNotRecommended: false,
    });
    this.handleModal();
  };

  handleModal = () =>
    this.setState(prevState => ({ isModal: !prevState.isModal }));

  setProductInRacion = async () => {
    const { transformedDate, weight, productSearchValue } = this.state;
    const { onRationsItemAdd, onGetInfo, onRationsItemUpdate } = this.props;

    const ration = {
      date: transformedDate,
      productTitle: productSearchValue,
      weight: Number(weight),
    };

    if (
      this.state.buttonAddAllow ||
      this.state.productSearchValue === '' ||
      this.state.weight === ''
    ) {
      return;
    }

    try {
      this.setState({
        buttonAddDisabled: true,
        productInputDisabled: true,
        WeightInputDisabled: true,
        buttonText: 'Добавление',
      });

      const rr = await onRationsItemAdd(ration);
      onRationsItemUpdate(rr.payload);

      this.setState({
        productSearchValue: '',
        weight: '',
        buttonAddAllow: true,
      });

      if (this.props.onModalClose) {
        this.props.onModalClose(false);
      }
    } catch (error) {
      sendNotification(error.payload.message || 'error');
    } finally {
      this.setState({
        buttonAddDisabled: false,
        productInputDisabled: false,
        WeightInputDisabled: false,
        buttonText: 'Добавить',
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { isNotRecommended } = this.state;

    if (isNotRecommended) {
      this.handleModal();
      return;
    }

    this.setProductInRacion();
  };

  render() {
    const {
      weight,
      date,
      visibleListProducts,
      productSearchValue,
      products,
      buttonAddDisabled,
      visibleNotification,
      productInputDisabled,
      WeightInputDisabled,
      buttonText,
      buttonAddAllow,
      isModal,
      isNotRecommended,
    } = this.state;

    const { mode } = this.props;

    const classUsualEnabled = `${
      mode === 'usual' ? styles.visible : styles.hidden
    }`;
    const classButton = `${
      mode === 'usual' ? styles.buttonUsual : styles.buttonModal
    }`;
    const classInputPanelWrapper = `${
      mode === 'usual'
        ? styles.inputPanelWrapperUsual
        : styles.inputPanelWrapperModal
    }`;

    return (
      <form
        id="form-products"
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <div className={(styles.datePickerWrapper, classUsualEnabled)}>
          <Picker date={date} onChangeData={this.handlerChangeDate} />
        </div>

        <div className={classInputPanelWrapper}>
          <div className={styles.inputWrap}>
            <ProductsInput
              isNotRecommended={isNotRecommended}
              productSearchValue={productSearchValue}
              onChangeInput={this.handleChangeProducts}
              disabled={productInputDisabled}
            />
            {products && products.length > 0 && visibleListProducts && (
              <ProductsList
                products={products}
                onHover={this.handleItemHover}
                onInputClick={this.handleProductInputClick}
                onMouseOut={this.handleProductsListMouseOut}
              />
            )}
          </div>

          <WeightInput
            weight={weight}
            onChangeWeight={this.handleChangeWeight}
            disabled={WeightInputDisabled}
          />
          <div className={classButton}>
            <Button
              type="submit"
              title={buttonText}
              onClick={this.handleAddProductClick}
              disabled={buttonAddDisabled}
              allow={buttonAddAllow}
            />
          </div>
        </div>
        {visibleNotification && <ReactNotification />}
        {isModal && (
          <NewModal onModalClose={this.handleModal}>
            <NotRecommendedInModal
              productName={productSearchValue}
              handlerNotRecommended={this.handlerNotRecommended}
            />
          </NewModal>
        )}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRationsItemAdd: param =>
    dispatch(rationsItemOperations.rationsItemAdd(param)),
  onGetInfo: param =>
    dispatch(rationsItemOperationsVit.fetchRationItems(param)),
  onRationsItemUpdate: param =>
    dispatch(rationsItemOperationsVit.rationsItemUpdate(param)),
});
const mapStateToProps = state => ({
  userDate: rationItemsSelectors.getRationDate(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInputForm);
