using System;
using System.Collections.Generic;
using System.Text;
using BE.Interfaces.Repository;

namespace BE
{ 
    public interface IUnitOfWork : IDisposable
    {
        #region SQL
        
        IPermissionRepository PermissionRepository { get;  }
        IPermissionTypeRepository PermissionTypeRepository { get;  }
        
        int Complete();
        #endregion

    }
}