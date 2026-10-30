# Connect Google Calendar

The Schedule tab uses Google's live calendar embed. It works on GitHub Pages
without an API key, backend, or visitor sign-in when the calendar is public.
Until a calendar ID is supplied, the page shows a contact message.

1. On a computer, open Google Calendar and go to **Settings**.
2. Under **Settings for my calendars**, choose the calendar to display.
3. Under **Access permissions for events**, enable **Make available to public**
   and select **See only free/busy (hide details)** to share availability without
   meeting titles, locations, descriptions, or guest details.
4. Under **Integrate calendar**, copy **Calendar ID**.
5. Set `calendarId` in `schedule-config.js` to that ID. Set `timeZone` to the
   desired IANA time zone (the default is `America/New_York`).
6. Deploy the updated files through the site's usual GitHub Pages workflow.
7. Open the Schedule page in a signed-out/private browser window. Confirm that
   busy blocks appear and event details are hidden. Your signed-in Google account
   may see more details than public visitors do.

The ID and time zone are public configuration, not credentials. Do not paste a
secret iCal URL, access token, or account password into the site. The embed does
not change Google's sharing permissions or hide details on its own. Calendar
updates are served by Google; editing meetings does not require redeploying.

On narrow screens, the calendar scrolls horizontally to preserve Google's minimum
500px embed width. Visitors can also open it separately using the Google Calendar
link above the embed. The page shares availability; it does not book meetings
automatically.

If the calendar is managed by a school or employer, the administrator may prevent
public sharing. If that applies, use an account/calendar permitted to share
publicly. A separate availability calendar only reflects events added or synced
to that calendar; it does not automatically include your other calendars.

Google's guides:
- [Create and manage a public calendar](https://support.google.com/calendar/answer/37083?hl=en)
- [Add a calendar to your website](https://support.google.com/calendar/answer/41207?hl=en)
