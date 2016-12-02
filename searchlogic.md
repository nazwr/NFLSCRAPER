Player.where("last_name like ?", "Smi%")

^^ This will pull all Player objects in the db that start with Smi - we can input the search field state to this function once its > 3.
