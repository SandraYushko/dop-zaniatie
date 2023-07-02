type usersType = {
[key:string]:{id:number, name:string}
}

let users: usersType

beforeEach(()=>{
    users = {
        "0": {id:111258, name: "Dimych"},
        "1": {id:15, name: "Sasha"},
        "2": {id:189, name: "Valera"}
    }
})

test("should apdate korrespond user",()=>{
    users[1].name="Ekaterina"
    expect(users[1]).toStrictEqual({id:15, name: "Ekaterina"})
})

test("should delete korrespond user",()=>{
    delete users[1]
    expect(users[1]).toBeUndefined()
})
