import { test, expect } from '@playwright/test';
import { baseUrl, getStepFactorByBrowser, wait, goToOptimized } from './shared';

test.describe('Document Scroll', () => {
  test('the document should be auto scroll-able', async ({ page }, testInfo) => {
    await goToOptimized(page, `${baseUrl}/doc-scroll.html`)
    const { docHeight } = await page.evaluate(() => ({
      docHeight: window.innerHeight,
    }))

    const mouse = page.mouse
    await mouse.move(50, docHeight - 100)
    await mouse.down()
    await mouse.move(50, docHeight + 150, { steps: 100 * getStepFactorByBrowser(testInfo.project.name) })
    await mouse.up()
    await wait(100)

    const { selected } = await page.evaluate(() => ({
      selected: window.selected,
    }))

    const expected = [
      "item-301",
      "item-326",
      "item-351",
      "item-376",
      "item-401",
      "item-426",
      "item-451",
      "item-476",
    ]

    expect(selected.sort()).toEqual(expected.sort())
  })
})
