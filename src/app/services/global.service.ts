export class GlobalService {

    private static _instance: GlobalService = new GlobalService();

    public login_token = '';

    public constructor() { }

    public getInstance(): GlobalService {
        return GlobalService._instance;
    }

    init() { }
}
