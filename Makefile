#!make
include .env
pgenInit:
	 pgen exec sequelize-template -d golang -u golang -p tOpSeCrEt -h 45.150.67.68  -t model --fix
sequelize-zirov:
	 npx sequelize-auto -o "./models" -d golang -h 45.150.67.68 -u golang -p 5432 -x YM7ZabmCA4ew -e postgres
