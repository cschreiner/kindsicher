// -----------------------------------------------------------------------------
// tracker.js
// -----------------------------------------------------------------------------
// (c) jfg://networks SAS

// -----------------------------------------------------------------------------
// Function to get the social network associated with an url

_obhit.getSocial = function(url)
{
    var socialRefs = [];

    socialRefs['^http[s]?:\/\/.*?\.facebook\..*?\/']         = 'facebook';
    socialRefs['^http[s]?:\/\/plus\.url\.google\..*?\/']     = 'google';
    socialRefs['^http[s]?:\/\/.*?\.twitter\..*?\/']          = 'twitter';
    socialRefs['^http[s]?:\/\/.*?\.linkedin\..*?\/']         = 'linkedin';
    socialRefs['^http[s]?:\/\/fb\.me\/']                     = 'facebook';
    socialRefs['^http[s]?:\/\/t\.co\/']                      = 'twitter';
    socialRefs['^http[s]?:\/\/admin\.over-blog-kiwi\.com\/'] = 'overblog';
    socialRefs['^http[s]?:\/\/my\.over-blog\.com\/']         = 'overblog';

    for (var re in socialRefs)
    {
        if (url.match(new RegExp(re)))
        {
            return socialRefs[re];
        }
    }

    return '';
};

// -----------------------------------------------------------------------------
// get cookie

var cookie      = document.cookie,
    cookieName  = 'obhit',
    cookieStart = 0,
    cookieEnd   = 0,
    cookieValue = '';

if (cookie.length > 0)
{
    cookieStart = cookie.indexOf(cookieName + "=");

    if (cookieStart != -1)
    {
        cookieStart = cookieStart + cookieName.length + 1;
        cookieEnd   = cookie.indexOf(";", cookieStart);

        if (cookieEnd == -1)
        {
            cookieEnd = cookie.length;
        }

        cookieValue = unescape(
            cookie.substring(
                cookieStart,
                cookieEnd
            )
        );
    }
}

if (cookieValue == '')
{
    cookieValue = Math.floor((Math.random() * 0xFFFFFFFF) + 1);
}

// -----------------------------------------------------------------------------
// set or reset cookie for 4 hours

var today = new Date();
var expiresDate = new Date( today.getTime() + (1000 * 60 * 60 * 4) );

document.cookie =
    cookieName + "=" + escape(cookieValue)
        + '; expires=' + expiresDate.toString()
        + '; path=/';

// -----------------------------------------------------------------------------
// Getting the social

var social = _obhit.getSocial(document.referrer);

if (('overblog' == social) && ('#ob' != document.location.hash))
{
    social = '';
}
if ('#ob' === document.location.hash)
{
    document.location.hash = '';
}

// -----------------------------------------------------------------------------
// generate image querystring

var qstr =
    'lang='  + _obhit.lang + '&' +
    'idb='   + _obhit.idb + '&' +
    'tz='    + _obhit.tz + '&' +
    'id='    + _obhit.id + '&' +
    'ck='    + encodeURIComponent(cookieValue) + '&' +
    'url='   + encodeURIComponent(document.location.href) + '&' +
    'title=' + encodeURIComponent(document.title.substr(0,255)) + '&' +
    'ref='   + encodeURIComponent(document.referrer) + '&' +
    'soc='   + encodeURIComponent(social) + '&' +
    'pda='   + _obhit.pda;

// -----------------------------------------------------------------------------
// call the image

var i = new Image(1,1);
i.src =
	'http://hitjslb-630086819.us-east-1.elb.amazonaws.com/hit/hit.php?' + qstr;
