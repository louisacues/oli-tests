import {login} from '../../utils/helpers/login'
import {goToProjectsPage} from '../../utils/helpers/goToProjectsPage'
import { goToHomePage } from '../../utils/helpers/goToHomePage'

describe('Add Task on Projects Page', () => {

    beforeEach(() => {
        goToHomePage()
        login()
        goToProjectsPage()
    })
    it('should be able to see Projects Heading', () => {
        const dashboardElement = cy.get('h2.text-xl.font-semibold')
        dashboardElement.should('contain', 'Projects')
    })


})