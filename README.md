# Preact Google Chrome Extension

This is a sample of getting Preact to work in a
Google Chrome extension with manifest v3. It's a
basic "Hello, World" prototype. TBD if there are
issues beyond that.

Load the extension by turning on developer mode
and clicking "Load unpacked" in the Extensions
setting panel. The extension shows up under the
extension puzzle piece icon by the address bar.
Click it, then click "Preact Extension Test" and
you should see the hello world popup show up.

This works in local dev on my machine. I was
getting all kinds of Content Security Policy
(CSP) errors while trying to figure this out
so hopeful it having cleared those it'll work
in prod to. Let me know if you deploy one.

As for the methodolty. Instead of doing inline
scripts I downloaded preact and called it with
a `<script src...` tag. The code for the extension
functionality itself is also in a separate
script file. It too is called with `<script src...`

That methodology avoids inline scripts in the
HTML file itself which is what was causing
all the issues.


