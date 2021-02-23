using System.Threading.Tasks;
using Application.Services;
using Domain.Interfaces;
using Infrestructure.Data;
using Infrestructure.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace __test__
{
    [TestClass]
    public class UnitTest1
    {
        ClasesServices _clases = new ClasesServices(new UnitOfWork(new GetDanceNowContext()));

        [TestMethod]
        public void TestMethod1()
        {
            
        }
    }
}
