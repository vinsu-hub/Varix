from playwright.sync_api import sync_playwright
import os

os.makedirs("D:\\VARIX\\screenshots", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    # Homepage - scroll to testimonials section
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)

    # Full page screenshot
    page.screenshot(path="D:\\VARIX\\screenshots\\phase1-home-full.png", full_page=True)

    # Scroll to testimonials section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.6)")
    page.wait_for_timeout(500)
    page.screenshot(path="D:\\VARIX\\screenshots\\phase1-home-testimonials.png")

    # Work page
    page.goto("http://localhost:3000/work")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)
    page.screenshot(path="D:\\VARIX\\screenshots\\phase1-work.png", full_page=True)

    browser.close()
    print("Screenshots saved to D:\\VARIX\\screenshots\\")
