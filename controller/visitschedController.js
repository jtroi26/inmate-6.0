const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getVisitSched = async (req, res) => {
  try {
    const inmate = await prisma.InmateRecord.findUnique({ where: { id: req.params.id } });
    res.render('visitsched', { inmate });
  } catch (error) {
    console.log(error);
  }
}
exports.postVisitSched = async (req, res) => {
  try {
    const {
      // inmate details
      inmateNo,
      cellBlock,
      lastname,
      firstname,
      middlename,
      suffix,
      gender,
      bday,
      // visitor details
      inmate_to_visit_id,
      vlastname,
      vfirstname,
      vmiddlename,
      vsuffix,
      vperAdd,
      timeVisit,
      dateVisit,
      relationship,
      contact,
    } = req.body;

    const visitsched = await prisma.visitSched.create({
      data: {
        // inmate details
        inmateNo,
        cellBlock,
        lastname,
        firstname,
        middlename,
        suffix,
        gender,
        bday,
        // visitore details
        inmate_to_visit_id,
        vlastname,
        vfirstname,
        vmiddlename,
        vsuffix,
        vperAdd,
        timeVisit,
        dateVisit,
        relationship,
        contact,
    }
    });

    console.log('Set Appointment successfully');
  } catch (error) {
    console.error(error);
  }
  res.redirect('visitorindex');
};