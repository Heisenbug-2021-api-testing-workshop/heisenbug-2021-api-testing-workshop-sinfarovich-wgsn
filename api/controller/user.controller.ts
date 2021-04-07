import { JsonRequestWithValidation } from '../requests';
import { definitions } from "../../.temp/types";
import { BaseController } from "./base.controller";


export class UserController extends BaseController {
    
    async login(credentials: {username: string, password: string}) : Promise<string>{
        return (
            await new JsonRequestWithValidation()
            .prefixUrl(this.params.prefixUrl)
            .url('user/login')
            .searchParams(credentials)
            .send<definitions['AbstractApiResponse']>()
        ).headers['token'] as string
    }
}