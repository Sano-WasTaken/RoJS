import e = require("express")
import { Universe } from "../Universe"

export function requester(universe: Universe)
{
    const requester = e()

    const mainRoute = e.Router()

    mainRoute
        .get(`/online`, function(req, res){
            res.send(universe.online)
        })
        .get("/universe", function(req, res){
            res.send(universe.universeId)
        })
        .get("/ping", function(req, res){
            res.send("Pong !")
        })

    requester.use(`/${universe.name}`, mainRoute)

    return requester
}