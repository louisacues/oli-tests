import { login } from '../../utils/helpers/login'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { selectCompanyOnProjectPerClient } from '../../utils/helpers/selectCompanyProjectPerClient'

describe('Creating Special Forms under Projects per Client tests', () => {
    beforeEach( () =>{
        goToHomePage()
        login()
        selectCompanyOnProjectPerClient()
      })
      it.only('should be on padua corp llc project', () => {
        
      });
})