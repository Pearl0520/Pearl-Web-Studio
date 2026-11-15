"use strict";

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
            "",
            "Project details:",
            formData.get("message")
        ].join("\n");

        const whatsappUrl = `https://wa.me/27834769653?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}