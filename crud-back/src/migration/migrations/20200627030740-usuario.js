module.exports = {
  up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
      return db.collection('usuarios').insertOne({nome: 'admin',senha:'$2b$10$XdE78N1uufl1ucqD/p6Zf.fvufvoXSf1E3m.Sh1L7801thIx1TPx.'}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
