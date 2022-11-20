import { makeAutoObservable, runInAction } from "mobx";
import { authenticate } from "../service/beWiselyService";

export class AuthStore {
  public loading: boolean = false
  public error = {
    message: '',
    status: 0
  };
  constructor() {
    makeAutoObservable(this)
  }
  authenticate = async (login: string, password: string) => {
    runInAction(() => (this.error.message = ''))
    runInAction(() => (this.error.status = 0))
    runInAction(() => (this.loading = true))
    const res = await authenticate(login, password);
    console.log(res)
    if (res.status === 200) {
      sessionStorage.setItem('token', res.token)
    } else {
      runInAction(() => (this.error.message = res.erros[0].mensagem))
      console.log(res.erros[0].mensagem)
      runInAction(() => (this.error.status = res.status))
    }
    runInAction(() => (this.loading = false))
    return res
  }

  createAccount = async () => {
    try {
      runInAction(() => (this.loading = true))
      // const res = ;
      // return res
    } catch (e: any) {
      runInAction(() => (this.error.message = e.message))
      runInAction(() => (this.error.status = e.status))
    } finally {
      runInAction(() => (this.loading = false))
    }
  }
}