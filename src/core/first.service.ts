import {injectable} from '../di/decorator/injectable';
import {SecondService} from './second.service';

@injectable()
export class FirstService {

    constructor(private readonly secondService: SecondService) {
        console.log('FirstService initialized with dependency', this.secondService);
    }

}
