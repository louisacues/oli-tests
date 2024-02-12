import {login} from '../../utils/helpers/login'
import {goToProjectsPage} from '../../utils/helpers/goToProjectsPage'
import { goToHomePage } from '../../utils/helpers/goToHomePage'
import { newtaskFieldTitle, taskDescriptionTitle, projectTitleHeader, reviewNoteContent, commentContent } from './createTaskConstants'

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
    it('should be able to add task and description then delete', () => {
        const projectTask = cy.get('div.flex.flex-col.w-full')
        projectTask.within(() => {
            cy.contains('Anthony Corp').click()
        })

        const projectTitleGet = cy.get('h1.text-2xl.font-semibold')
        projectTitleGet.should('contain', projectTitleHeader)

        const addTaskButton = cy.contains('Add Task')
        addTaskButton.should('exist')
        addTaskButton.click()

        const inputTaskField = cy.get('#newTaskField')
        inputTaskField.type(newtaskFieldTitle)

        inputTaskField.invoke('val').should('contain', newtaskFieldTitle)

        const addButton = cy.contains('Add')
        addButton.should('exist')
        addButton.click()

        const newTaskTitle = cy.contains('textarea', newtaskFieldTitle)
        newTaskTitle.should('exist')

        const taskDescriptionField = cy.get('textarea.ring-2')
        taskDescriptionField.type(taskDescriptionTitle)

        taskDescriptionField.invoke('val').should('eq', taskDescriptionTitle)

        const taskDescriptionCheckButton = cy.get('div.absolute.bottom-2.right-2.space-x-1')
        taskDescriptionCheckButton.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        const projectDeleteButton = cy.get('div.w-full.col-span-full')
        projectDeleteButton.within(() => {
            cy.get('button').click()
        })

        const deleteConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
        deleteConfirmation.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        
    })

    it('should be able to add task, description, and review notes then delete', () => {
        const projectTask = cy.get('div.flex.flex-col.w-full')
        projectTask.within(() => {
            cy.contains('Anthony Corp').click()
        })
        const projectTitleGet = cy.get('h1.text-2xl.font-semibold')
        projectTitleGet.should('contain', projectTitleHeader)

        // Create Task
        const addTaskButton = cy.contains('Add Task')
        addTaskButton.should('exist')
        addTaskButton.click()

        const inputTaskField = cy.get('#newTaskField')
        inputTaskField.type(newtaskFieldTitle)

        inputTaskField.invoke('val').should('contain', newtaskFieldTitle)

        const addButton = cy.contains('Add')
        addButton.should('exist')
        addButton.click()

        const newTaskTitle = cy.contains('textarea', newtaskFieldTitle)
        newTaskTitle.should('exist')

        // Add Task Description
        const taskDescriptionField = cy.get('textarea.ring-2')
        taskDescriptionField.type(taskDescriptionTitle)

        taskDescriptionField.invoke('val').should('eq', taskDescriptionTitle)

        const taskDescriptionCheckButton = cy.get('div.absolute.bottom-2.right-2.space-x-1')
        taskDescriptionCheckButton.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        // Add Note
        const addNewNoteButton = cy.get('div.flex.flex-col.w-full > ul > li > div > button')
        addNewNoteButton.click()

        const reviewNoteField = cy.get('div.flex.flex-col.w-full > ul > li > div > input')
        reviewNoteField.type(reviewNoteContent)

        const saveReviewNote = cy.get('div.flex.flex-col.w-full > ul > li > div > div > button:nth-child(1)')
        saveReviewNote.click()

        const reviewNoteContentVal = cy.get('ul.w-full.flex.flex-col > li > div > input')
        reviewNoteContentVal.invoke('val').should('eq', reviewNoteContent)
    

        const projectDeleteButton = cy.get('div.w-full.col-span-full')
        projectDeleteButton.within(() => {
            cy.get('button').click()
        })

        const deleteConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
        deleteConfirmation.within(() => {
            cy.get('button:nth-child(2)').click()
        })
    })


    it('should be able to add task, description, review notes, and add comment then delete', () => {
        const projectTask = cy.get('div.flex.flex-col.w-full')
        projectTask.within(() => {
            cy.contains('Anthony Corp').click()
        })
        const projectTitleGet = cy.get('h1.text-2xl.font-semibold')
        projectTitleGet.should('contain', projectTitleHeader)

        // Create Task
        const addTaskButton = cy.contains('Add Task')
        addTaskButton.should('exist')
        addTaskButton.click()

        const inputTaskField = cy.get('#newTaskField')
        inputTaskField.type(newtaskFieldTitle)

        inputTaskField.invoke('val').should('contain', newtaskFieldTitle)

        const addButton = cy.contains('Add')
        addButton.should('exist')
        addButton.click()

        const newTaskTitle = cy.contains('textarea', newtaskFieldTitle)
        newTaskTitle.should('exist')

        // Add Task Description
        const taskDescriptionField = cy.get('textarea.ring-2')
        taskDescriptionField.type(taskDescriptionTitle)

        taskDescriptionField.invoke('val').should('eq', taskDescriptionTitle)

        const taskDescriptionCheckButton = cy.get('div.absolute.bottom-2.right-2.space-x-1')
        taskDescriptionCheckButton.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        // Add Note
        const addNewNoteButton = cy.get('div.flex.flex-col.w-full > ul > li > div > button')
        addNewNoteButton.click()

        const reviewNoteField = cy.get('div.flex.flex-col.w-full > ul > li > div > input')
        reviewNoteField.type(reviewNoteContent)

        const saveReviewNote = cy.get('div.flex.flex-col.w-full > ul > li > div > div > button:nth-child(1)')
        saveReviewNote.click()

        const reviewNoteContentVal = cy.get('ul.w-full.flex.flex-col > li > div > input')
        reviewNoteContentVal.invoke('val').should('eq', reviewNoteContent)

        // Add Comment
        const commentField = cy.get('div.ql-editor:last')
        commentField.click()
        commentField.type(commentContent)

        const commentButton = cy.contains("button", "COMMENT")
        commentButton.should('exist')
        commentButton.click()
        const commentDiv = cy.get('div.flex.flex-col.space-y-4.mb-4')
        commentDiv.within(() => {
            cy.get('p').should('contain', commentContent)
        })

        const projectDeleteButton = cy.get('div.w-full.col-span-full')
        projectDeleteButton.within(() => {
            cy.get('button').click()
        })

        const deleteConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
        deleteConfirmation.within(() => {
            cy.get('button:nth-child(2)').click()
        })
    })

    it('should be able add task, description, review notes, add comment, and pick a date then delete ', () => {

        const projectTask = cy.get('div.flex.flex-col.w-full')
        projectTask.within(() => {
            cy.contains('Anthony Corp').click()
        })
        const projectTitleGet = cy.get('h1.text-2xl.font-semibold')
        projectTitleGet.should('contain', projectTitleHeader)

        // Create Task
        const addTaskButton = cy.contains('Add Task')
        addTaskButton.should('exist')
        addTaskButton.click()

        const inputTaskField = cy.get('#newTaskField')
        inputTaskField.type(newtaskFieldTitle)

        inputTaskField.invoke('val').should('contain', newtaskFieldTitle)

        const addButton = cy.contains('Add')
        addButton.should('exist')
        addButton.click()

        const newTaskTitle = cy.contains('textarea', newtaskFieldTitle)
        newTaskTitle.should('exist')

        // Add Task Description
        const taskDescriptionField = cy.get('textarea.ring-2')
        taskDescriptionField.type(taskDescriptionTitle)

        taskDescriptionField.invoke('val').should('eq', taskDescriptionTitle)

        const taskDescriptionCheckButton = cy.get('div.absolute.bottom-2.right-2.space-x-1')
        taskDescriptionCheckButton.within(() => {
            cy.get('button:nth-child(2)').click()
        })

        // Add Note
        const addNewNoteButton = cy.get('div.flex.flex-col.w-full > ul > li > div > button')
        addNewNoteButton.click()

        const reviewNoteField = cy.get('div.flex.flex-col.w-full > ul > li > div > input')
        reviewNoteField.type(reviewNoteContent)

        const saveReviewNote = cy.get('div.flex.flex-col.w-full > ul > li > div > div > button:nth-child(1)')
        saveReviewNote.click()

        const reviewNoteContentVal = cy.get('ul.w-full.flex.flex-col > li > div > input')
        reviewNoteContentVal.invoke('val').should('eq', reviewNoteContent)

        // Add Comment
        const commentField = cy.get('div.ql-editor:last')
        commentField.click()
        commentField.type(commentContent)

        const commentButton = cy.contains("button", "COMMENT")
        commentButton.should('exist')
        commentButton.click()
        const commentDiv = cy.get('div.flex.flex-col.space-y-4.mb-4')
        commentDiv.within(() => {
            cy.get('p').should('contain', commentContent)
        })

        const dateButton = cy.contains("button", "Set Due Date")
        dateButton.should('exist')
        dateButton.click()

        const dateContainer = cy.get("div.absolute.z-50.block.pt-2.top-12.date-picker-container")
        dateContainer.within(() => {
            cy.get('div.p-1').within(() =>{
                cy.get('span:nth-child(12)').click()
            })
        })

        const dateValueCont = cy.get('div.relative.w-full.bg-transparent > div > div > div  > button > span')
        dateValueCont.invoke('text').should('eq', '08-Feb-2024')

        const projectDeleteButton = cy.get('div.w-full.col-span-full')
        projectDeleteButton.within(() => {
            cy.get('button').click()
        })

        const deleteConfirmation = cy.get('div.flex.justify-center.items-center.space-x-4')
        deleteConfirmation.within(() => {
            cy.get('button:nth-child(2)').click()
        })
    })
})