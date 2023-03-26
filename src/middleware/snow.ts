// export HTTPS_PROXY=http://127.0.0.1:9000

const snowflake = require('snowflake-sdk');

const connection = snowflake.createConnection({
  account: 'nike',
  role: 'EMEA_DA_CONS_BIFROST_READ_DEV',
  username: 'a.SF.D.EMEA.MNF.R',
  password: 'Z.CtWHg;R}5;7@*y$Te@',
  database: 'EMEA_DA_CONS_DEV',
  warehouse: 'EMEA_DA_CONS_BIFROST_DEV_QA',
  schema: 'EMEA_MNF',
  authenticator: 'https://nike.okta.com',
  // clientSessionKeepAlive: true,

  //@ts-ignore
  // comment below 2 lines for running on local and working from remote
  proxyHost: '127.0.0.1',
  proxyPort: 9000,
});
connection.connectAsync(function (
  err: any,
  conn: any,
) {
  if (err) {
    console.error(
      'Unable to connect: ' + err.message,
    );
  } else {
    console.log(
      'Successfully connected as id: ' +
        connection.getId(),
    );
  }
});
