using Microsoft.AspNetCore.Mvc;
using Backend;
using Backend.Models;
using Microsoft.AspNetCore.Cors;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors]
    public class KeywordController : ControllerBase
    {
        private readonly ILogger<KeywordController> _logger;

        public KeywordController(ILogger<KeywordController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void Create([FromForm]Keyword keyword)
        {
            if (OracleConnect.conn != null && keyword.KeywordId != null)
            {

            }
        }

        [HttpGet("byId")]
        public Keyword Get(int id)
        {
            var rq = OracleConnect.ReaderQuery("Select * from Keyword where KeywordId=" + id.ToString());
            Keyword keyword = new Keyword();
            if (rq != null)
            {
                rq.Read();
                keyword.KeywordText = rq["KeywordText"].ToString();
                keyword.KeywordId = rq["KeywordId"].ToString();
                rq.Dispose();
            }
            return keyword;
        }
    }
}