import {
  ADD_COUNTER,
  ADD_NEW,
  CHECKED_COUNT_PLUS,
  CHECKED_COUNT_MINUS,
  CHECK_ON,
  CHECK_OFF,
  CHECK_ALL,
  CANCEL_ALL,

} from "./mutation-types";


export default {
    addCart(context, payload) {
      // 这里context参数可以写成{state,commit}
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(goods => goods.iid == payload.iid);
      product ? (context.commit(ADD_COUNTER, product), resolve('当前商品数量+1'))
        : (payload.count = 1, payload.checked = true,
          context.commit(CHECKED_COUNT_PLUS),
          context.commit(ADD_NEW, payload),
          resolve('添加至购物车成功')
      );
      })
  },
  checkedChange({state,commit},index) {
    state.cartList[index].checked ? (commit(CHECK_OFF,index), commit(CHECKED_COUNT_MINUS))
      : (commit(CHECK_ON,index), commit(CHECKED_COUNT_PLUS));
      
  },
  operateAll({ state, commit }) {
    console.log('begin operate...');
    state.checkedCount == state.cartList.length ? commit(CANCEL_ALL) : commit(CHECK_ALL);
  }
  }