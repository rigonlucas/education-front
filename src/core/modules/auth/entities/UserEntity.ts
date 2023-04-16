export class UserEntity {

    constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string | null = null
    ) {
    }
}
