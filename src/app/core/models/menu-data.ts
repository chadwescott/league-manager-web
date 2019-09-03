import { Delegates } from '../delegates.module';

export class MenuData {
    constructor(
        public text: string,
        public iconClass: string,
        public action: Delegates.ICallback
    ) { }
}
