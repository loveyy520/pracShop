export default {
    cartLength(state) {
        return state.cartList.length;
    },
    cartList(state) {
        return state.cartList;
    },
    checkedCount(state) {
        return state.checkedCount;
    },
    isAllChecked(state) {
        return state.checkedCount == state.cartList.length;
    }
}