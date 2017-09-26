function exploreCellN(n,x,y)
{



        if (x != 0 && x != n.length() && y < 0 && y < n[0].length())
        {
            for (var i = x - 1; i < x+2; i++)
            {
                for (var j = y - 1; j < y+2; j++)
                {
                    if (n[i][j] == 0)
                    {
                        n[i][j].classList.add('visible');

                        exploreCellN(n, i, j);
                    }
                }
            }
        }
        else if(x==0 && y==0)
        {
            for (var i = x ; i <= x+1; i++)
            {
                for (var j = y ; j <= y+1; j++)
                {
                    if (n[i][j] == 0)
                    {
                        n[i][j].classList.add('visible');
                        exploreCellN(n, i, j);
                    }
                }
            }
        }
        else if(x==n.length() && y==0)
        {
            for (var i = x-1 ; i <= x+1; i++)
            {
                for (var j = y ; j <= y+1; j++)
                {
                    if (n[i][j] == 0)
                    {
                        n[i][j].classList.add('visible');
                        exploreCellN(n, i, j);
                    }
                }
            }
        }
        else if(x==n.length() && y==n.length())
        {
            for (var i = x-2 ; i <= x; i++)
            {
                for (var j = y-2 ; j <= y; j++)
                {
                    if (n[i][j] == 0)
                    {
                        n[i][j].classList.add('visible');
                        exploreCellN(n, i, j);
                    }
                }
            }

        }
}