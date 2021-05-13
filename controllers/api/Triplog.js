const router = require('express').Router();
const { Triplog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTriplog = await Triplog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTriplog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const TriplogData = await Triplog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!TriplogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(TriplogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;