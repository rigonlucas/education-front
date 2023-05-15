import {UserInterface} from "@/core/modules/auth/interfaces/UserInterface";

export class UserEntity implements UserInterface {

    constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string | null = null
    ) {
    }
}
