/* eslint-disable */
import expect from 'expect'
import formattedEntry from '../../src/utils/formattedEntry'

describe('formattedEntry', () => {
  it('should convert an entry into a new one with title, body and url attributes', () => {
    const entry = {
      "starred" : false,
      "creationDate" : "2017-11-15T22:43:03Z",
      "text" : "Day One\nYeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "timeZone" : "Asia\/Pontianak",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "tags" : [
        "Day One"
      ],
      "duration" : 0
    }

    const expected = {
      "starred" : false,
      "creationDate" : "2017-11-15T22:43:03Z",
      "text" : "Day One\nYeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "timeZone" : "Asia\/Pontianak",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "tags" : [
        "Day One"
      ],
      "duration" : 0,
      "title" : "Day One",
      "body"  : "Yeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "day_one"
    }
    
    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })

  it('should accept any first line of entry as title', () => {
    const entry = {
      "text" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
    }

    const expected = {
      "text" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "title" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.",
      "body" : "I wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "this_app_really_slick__superb_design_style_and_very__well__handcrafted__in_every_pixel_"
    }

    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })

  it('should accept an entry with empty fist new line as empty title, with url copied from uuid instead', () => {
    const entry = {
      "text" : "\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
    }

    const expected = {
      "text" : "\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "title" : "",
      "body" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "6D558974A12B40D98552EF31BB00C166"
    }

    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })
})
