import { Role } from '../../role/enums/role.enum'
import { IAppUser } from '../interfaces/user.interface'

export class UserResponse implements IAppUser {
  id: string
  name: string
  email: string
  password: string
  role: Role
  address: string
  phoneNumber: string
  avatar: string
  otp: number
  otpExpiredAt?: Date
  isVerified: boolean
  _accessToken?: string

  static all(data: IAppUser): UserResponse {
    const res = new UserResponse()

    res.id = data.id
    res.name = data.name
    res.email = data.email
    res.password = '******'
    res.role = data.role
    res.address = data.address
    res.phoneNumber = data.phoneNumber
    res.avatar = data.avatar
    res.otp = data.otp
    res.otpExpiredAt = data.otpExpiredAt
    res.isVerified = data.isVerified
    res._accessToken = data.token

    return res
  }

  static alls(data: IAppUser[]): UserResponse[] {
    return data.map((data) => this.all(data))
  }
}
