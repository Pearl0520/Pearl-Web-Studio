"use strict";

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mainNavigation = document.getElementById("main-navigation");

if (mobileNavToggle instanceof HTMLButtonElement && mainNavigation instanceof HTMLElement) {
    mobileNavToggle.addEventListener("click", () => {
        const isExpanded = mobileNavToggle.getAttribute("aria-expanded") === "true";
        mobileNavToggle.setAttribute("aria-expanded", String(!isExpanded));
        mainNavigation.classList.toggle("is-open", !isExpanded);
    });
}

const projectEnquiryForm = document.getElementById("project-enquiry");

if (projectEnquiryForm instanceof HTMLFormElement) {
    projectEnquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(projectEnquiryForm);
        const message = [
            "Hello Pearl Web Studio, I'd like to enquire about a project.",
            "",
            `Name: ${formData.get("name")}`,
            `Email: ${formData.get("email")}`,
            `Business: ${formData.get("business") || "Not provided"}`,
            `Service: ${formData.get("projectType")}`,
            `Budget: ${formData.get("budget") || "Not provided"}`,
            `Timeline: ${formData.get("timeline") || "Not provided"}`,
            "Terms & Conditions: accepted",
            "",
            "Project details:",
            formData.get("message")
        ].join("\n");

        const whatsappUrl = `https://wa.me/27834769653?text=${encodeURIComponent(message)}`;
        const whatsappWindow = window.open(whatsappUrl, "_blank");

        if (whatsappWindow) {
            whatsappWindow.opener = null;
        } else {
            window.location.assign(whatsappUrl);
        }
    });
}