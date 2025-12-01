<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; max-width: 768px; margin: 0 auto; padding: 2rem; color: #333; line-height: 1.6; }
          header { padding-bottom: 2rem; border-bottom: 1px solid #eee; margin-bottom: 2rem; }
          h1 { font-size: 2rem; margin-bottom: 0.5rem; }
          p { margin: 0; color: #666; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .item { margin-bottom: 2rem; }
          .item h3 { margin-bottom: 0.5rem; }
          .item-meta { font-size: 0.875rem; color: #999; margin-bottom: 0.5rem; }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <p><a href="{/rss/channel/link}">Visit Website &#x2192;</a></p>
        </header>
        <main>
          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <h3><a href="{link}"><xsl:value-of select="title"/></a></h3>
              <div class="item-meta"><xsl:value-of select="pubDate"/></div>
              <p><xsl:value-of select="description"/></p>
            </div>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
