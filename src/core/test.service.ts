import {injectable} from '../di/decorator/injectable';
import {InnerService} from './inner.service';

@injectable()
export class TestService {

    constructor(public readonly innerService: InnerService) {}

}
