import { Loading } from "./loading.enum"

export interface ILoading<T> {
    data: T
    loading: Loading
}
