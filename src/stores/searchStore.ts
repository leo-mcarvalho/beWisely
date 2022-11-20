import { makeAutoObservable, runInAction, toJS } from "mobx";
import { getTutorsByQuery } from "../service/beWiselyService";
import { Tutor } from "../utils/makeData";

export class SearchStore {
  public loading: boolean = false
  public error = {
    message: '',
    status: false
  };
  public tutors: Tutor[] = []
  public actualQuery: string = ''
  public selectedTutor: Tutor = {} as Tutor;
  constructor() {
    makeAutoObservable(this)
  }

  getTutorsByQuery = async (query: string) => {
    try {
      console.log('here')
      runInAction(() => (this.loading = true))
      const tutors = getTutorsByQuery(query);
      console.log(tutors)
      runInAction(() => (this.tutors = tutors))
      console.log(toJS(this.tutors))
    } catch (e: any) {
      runInAction(() => (this.error.message = e.message))
      runInAction(() => (this.error.status = e.status))
    } finally {
      runInAction(() => (this.actualQuery = query))
      console.log(toJS(this.actualQuery))
      runInAction(() => (this.loading = false))
    }
  }
}