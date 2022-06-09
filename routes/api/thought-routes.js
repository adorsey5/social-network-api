const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// GET, POST ROUTES:/api/thoughts
router.route("/").get(getAllThought).post(createThought);

// GET, PUT, DELETE ROUTES:/api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST, DELETE ROUTES:/api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
