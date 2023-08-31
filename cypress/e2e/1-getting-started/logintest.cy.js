


describe( 'Login test scenario', () =>{

    it('verify that the user can login with valid email and password', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq',('OrangeHRM')) //Positive test case assertion  

    })


    it('verify that the user cannot login with valid email and password', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('not.eq',('OrangeHRMM')) //Negative test case assertion 

    })

})