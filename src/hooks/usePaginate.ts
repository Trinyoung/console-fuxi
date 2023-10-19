import { ref, reactive } from "vue";
export const usePaginate = (method: Function) => {
  const pageSize = ref(10);
  const pageIndex = ref(1);
  const total = ref(0);
  const data = method({ pageIndex, pageSize });
  return {
    pageSize: 10,
    pageIndex: 1,
    data,
  };
};
