import {injectable} from '../di/decorator/injectable';

@injectable()
export class SecondService {

    constructor() {
        console.log('SecondService initialized');
    }

}
