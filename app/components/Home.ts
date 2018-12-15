
import * as Vts from 'vue-property-decorator'



@Vts.Component
export default class HomeRoute extends Vts.Mixins() {
	
	get message() {
		return 'blank vue thing goes here'
	}

}


