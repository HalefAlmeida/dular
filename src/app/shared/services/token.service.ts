import { Injectable } from '@angular/core';

const KEY = 'authToken'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /**Verifica se existe token armazenado
   * 
   * @returns true se houver token armazenado
   */
  hasToken() {
    return !!this.getToken()
  }

  /**Recupera um token armazenado localmente
   * 
   * @returns token
   */
  getToken() {
    return window.localStorage.getItem(KEY)
  }

  /**
   * Define um valor para o token armazenado localmente
   */
  setToken(token: string) {
    window.localStorage.setItem(KEY, token)
  }

  /**
   * Remove um token do armazenamento local
   */
  removeToken() {
    window.localStorage.removeItem(KEY)
  }
}
