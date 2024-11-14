const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
//get Appointments
router.get("/", appointmentController.getAllAppointments);
//get Appointments by id
router.get("/:id", appointmentController.getAppointmentById);
//post Appointments
router.post("/", appointmentController.createAppointment);
//update Appointments
router.put("/:id", appointmentController.updateAppointment);
//delete Appointments
router.delete("/:id", appointmentController.deleteAppointment);

router.get(
  "/client/:ClienteId",
  appointmentController.getAppointmentsForClient
);

module.exports = router;
