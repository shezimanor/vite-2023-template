# Pinia

## 簡介

Store (如 Pinia) 是一個保存狀態和業務邏輯的實體，它並不與組件樹綁定。
換句話說，它承載著全局狀態。
它有點像一個永遠存在的組件，每個組件都可以讀取和寫入它。
它有三個概念，`state`、`getter` 和 `action`，我們可以假設這些概念相當於組件中的 `data`、 `computed` 和 `methods`。

---

## 使用場景

一個 Store 應該包含可以在整個應用中訪問的數據。這包括在許多地方使用的數據，例如顯示在導航欄中的用戶信息，以及需要通過頁面保存的數據，例如一個非常複雜的多步驟表單。

---

## 最佳實踐

對 `defineStore()` 的返回值進行命名：使用 store 的名字，同時以 `use` 開頭且以 `Store` 結尾。 (比如 `useUserStore`，`useCartStore`，`useProductStore`)。

```javascript
// 第一個參數是你的專案中 Store 的唯一 ID。
// 第二個參數: Option Store
export const useCounterStore = defineStore('counterStore', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
```

```javascript
// 第一個參數是你的專案中 Store 的唯一 ID。
// 第二個參數: Setup Store
// ref()      => state
// computed() => getters
// function() => actions
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
```
