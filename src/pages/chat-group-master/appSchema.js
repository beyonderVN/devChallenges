export const appSchema = {
  viewCount: "app.viewCount.{{channelId}}",
  auth: "app.auth",
  currentChannel: "app.currentChannel",
  messages: "channels.{{channelId}}.messages",
  messages_id: "channels.{{channelId}}.messages.{{messageId}}",
  members: "channels.{{channelId}}.members",
  isMember: "channels.{{channelId}}.members.{{userId}}.isMember",
}
