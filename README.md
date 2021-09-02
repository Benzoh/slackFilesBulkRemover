# slackFilesBulkRemover

Bulk delete files uploaded to Slack

## usues

- Assuming that node.js can be used.
- Edit `SLACK_TOKEN` in `.env`. and Settings around the Slack app.
- Edit `timestamp_to` in `app/remover.js`.

```
$ yarn
```

```
$ node app/remover.js
```

## 自分向け

- IPアドレスで制限してるので使用時には随時チェックすべし。
- 