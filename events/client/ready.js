module.exports = async (Discord, client, message) => {
    console.log("Ready!")

    client.user.setActivity('-help commands', { type: "WATCHING" }).catch(console.error)
}