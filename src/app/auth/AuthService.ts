import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class AuthService {
  private usersKey = 'users'
  private sessionKey = 'currentUser'

  private getUsers(): User[] {
    const data = localStorage.getItem(this.usersKey)
    return data ? JSON.parse(data) : []
  }

  register(username: string, password: string) {
    const users = this.getUsers()

    const newUser: User = {
      id: Date.now(),
      username,
      password
    }

    users.push(newUser)
    localStorage.setItem(this.usersKey, JSON.stringify(users))
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers()

    const user = users.find(
      u => u.username === username && u.password === password
    )

    if (!user) return false

    localStorage.setItem(this.sessionKey, JSON.stringify(user))
    return true
  }

  logout() {
    localStorage.removeItem(this.sessionKey)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.sessionKey)
  }
}
