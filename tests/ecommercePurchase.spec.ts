import { test, expect } from '@playwright/test';

test('Buy on the page', async ({ page }) => {
    //abrir pagina
    await page.goto('https://automationexercise.com/');
    //
    await page.locator('(//i[contains(@class, \'fa fa-plus-square\')])[1]').click();
    //verificar pagina visible
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');
    //seleccionar cantidad
    await page.locator('#quantity').fill('3');
    //Añadir al carro
    await page.locator('(//button[contains(normalize-space(), "Add to cart")])[1]').click();
    //verificar modal
    await expect(page.locator('#cartModal')).toContainText('Added!');
    //clic en continuar
    await page.locator('(//button[contains(normalize-space(), "Continue Shopping")])').click();
    //verificar que el modal no es visible
    await expect(page.locator('.btn.btn-success.close-modal.btn-block')).not.toBeVisible();

});