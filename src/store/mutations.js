export default {
    addCount(state,product) {
        product.count++;
     },
    addNew(state,product) {
        state.cartList.push(product);
    },
    checkOn(state,index) {
        state.cartList[index].checked = true;
    },
    checkOff(state, index) {
        state.cartList[index].checked = false;
    },
    countPlus(state, index) {
        state.cartList[index].count++;
    },
    countMinus(state, index) {
        state.cartList[index].count--;
    },
    checkedCountPlus(state) {
        state.checkedCount++;
    },
    checkedCountMinus(state) {
        state.checkedCount--;
    },
    checkAll(state) {
        for (let index = 0; index < state.cartList.length;index++) {
            state.cartList[index].checked = true;
        }
        state.checkedCount = state.cartList.length;
    },
    cancelAll(state) {
        for (let index = 0; index < state.cartList.length;index++) {
            state.cartList[index].checked = false;
        }
        state.checkedCount = 0;
    }
}