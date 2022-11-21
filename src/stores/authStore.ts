import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../interfaces/user";
import { authenticate, createAccount } from "../service/beWiselyService";

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
    if (res.status === 200) {
      sessionStorage.setItem('token', res.token)
    } else {
      runInAction(() => (this.error.message = res.erros[0].mensagem))
      runInAction(() => (this.error.status = res.status))
    }
    runInAction(() => (this.loading = false))
    return res
  }

  createAccount = async (user: User) => {
    runInAction(() => (this.error.message = ''))
    runInAction(() => (this.error.status = 0))
    runInAction(() => (this.loading = true))
    const res = await createAccount(user);
    if (res.status !== 200) {
      runInAction(() => (this.error.message = res.erros[0].mensagem))
      runInAction(() => (this.error.status = res.status))
    }
    runInAction(() => (this.loading = false))
    return res
  }
}